// File: pages/chaldexnet/ChaldExNet.tsx
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { soundService } from '../../services/soundService.ts';
import { useGlobalStatus } from '../../context/StatusContext.tsx';
import { chatWithStaffAI } from '../../services/geminiService.ts';

import { CHANNELS } from './config/channels.ts';
import { INITIAL_MESSAGES } from './config/initialMessages.ts';
import { STAFF_STATUS } from './config/staffStatus.ts';
import { getChaldExNetPolicy } from './policy/chaldExNetPolicy.ts';

import { pickResponder } from './utils/pickResponder.ts';
import { buildChatPrompt } from './utils/buildChatPrompt.ts';
import { makeTimestamp } from './utils/makeTimestamp.ts';

import { ChannelSidebar } from './components/ChannelSidebar.tsx';
import { ChatHeader } from './components/ChatHeader.tsx';
import { MessageList } from './components/MessageList.tsx';
import { ChatComposer } from './components/ChatComposer.tsx';
import { PersonnelSidebar } from './components/PersonnelSidebar.tsx';

const ChaldExNet: React.FC = () => {
  const { status } = useGlobalStatus();
  const [activeChannelId, setActiveChannelId] = useState('wild-alerts');
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const policy = useMemo(() => getChaldExNetPolicy(status.userRole), [status.userRole]);
  const activeChannel = useMemo(() => CHANNELS.find(c => c.id === activeChannelId) || CHANNELS[0], [activeChannelId]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [activeChannelId, messages, isLoading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    const userMsg = input;
    setInput('');
    soundService.playClick();
    
    const userName = status.userRole === 'master' ? 'Master_Zero' : 'Staff_Member';
    const userAvatar = status.userRole === 'master' 
      ? 'https://api.dicebear.com/7.x/avataaars/svg?seed=ritsuka' 
      : 'https://api.dicebear.com/7.x/identicon/svg?seed=staff';

    const newMsg = {
      user: userName,
      content: userMsg,
      timestamp: makeTimestamp(),
      avatar: userAvatar
    };

    setMessages(prev => ({
      ...prev,
      [activeChannelId]: [...(prev[activeChannelId] || []), newMsg]
    }));

    setIsLoading(true);
    try {
      const responder = pickResponder(userName, STAFF_STATUS);
      const prompt = buildChatPrompt({
        channelName: activeChannel.name,
        channelDesc: activeChannel.desc,
        responder,
        responderStatus: STAFF_STATUS[responder],
        userName,
        message: userMsg
      });

      const response = await chatWithStaffAI(prompt);
      
      const aiMsg = {
        user: responder,
        content: response,
        timestamp: makeTimestamp(),
        avatar: responder === 'System_Log' 
          ? 'https://api.dicebear.com/7.x/identicon/svg?seed=system&backgroundColor=0f172a'
          : `https://api.dicebear.com/7.x/identicon/svg?seed=${responder}&backgroundColor=0f172a`
      };

      setMessages(prev => ({
        ...prev,
        [activeChannelId]: [...(prev[activeChannelId] || []), aiMsg]
      }));
      soundService.playSelect();
    } catch (err) {
      console.error("ChaldExNet Connection Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full flex bg-slate-50 dark:bg-[#0b0f19] animate-in fade-in duration-700 font-sans overflow-hidden">
      <ChannelSidebar activeChannelId={activeChannelId} onSelectChannel={setActiveChannelId} />

      <main className="flex-1 flex flex-col relative bg-white dark:bg-slate-950/20">
        <ChatHeader activeChannel={activeChannel} />

        <MessageList 
          ref={scrollRef} 
          messages={messages[activeChannelId] || []} 
          isLoading={isLoading} 
        />

        <ChatComposer 
          input={input} 
          setInput={setInput} 
          onSend={handleSend} 
          isLoading={isLoading} 
          channelName={activeChannel.name} 
        />
      </main>

      {policy.canSeePersonnelSidebar && <PersonnelSidebar />}
    </div>
  );
};

export default ChaldExNet;