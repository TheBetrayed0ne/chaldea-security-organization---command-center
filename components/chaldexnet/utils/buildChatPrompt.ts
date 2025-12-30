// File: src/pages/chaldexnet/utils/buildChatPrompt.ts
import { StaffStatus } from '../types.ts';

interface BuildChatPromptArgs {
  channelName: string;
  channelDesc: string;
  responder: string;
  responderStatus: StaffStatus;
  userName: string;
  message: string;
}

export const buildChatPrompt = ({
  channelName,
  channelDesc,
  responder,
  responderStatus,
  userName,
  message
}: BuildChatPromptArgs): string => {
  return `
        [CHANNEL: #${channelName}]
        [TOPIC: ${channelDesc}]
        [RESPONDER_IDENTITY: ${responder}]
        [RESPONDER_STATUS: ${responderStatus}]
        [USER: ${userName}]
        MESSAGE: ${message}
        
        Respond as ${responder} in a way that fits the channel's theme and the Chaldea workplace vibe. 
        If status is "dnd", be slightly shorter or more formal. If "idle", maybe mention being busy. Keep it concise.
      `;
};
