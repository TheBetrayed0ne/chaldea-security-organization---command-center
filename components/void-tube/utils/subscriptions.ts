// Local storage key for subscriptions
const SUBSCRIPTIONS_KEY = 'voidtube_subscriptions';

// Get all subscribed channel IDs
export const getSubscriptions = (): string[] => {
  try {
    const stored = localStorage.getItem(SUBSCRIPTIONS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Failed to load subscriptions:', error);
    return [];
  }
};

// Check if subscribed to a channel
export const isSubscribed = (creatorId: string): boolean => {
  const subscriptions = getSubscriptions();
  return subscriptions.includes(creatorId);
};

// Subscribe to a channel
export const subscribe = (creatorId: string): void => {
  try {
    const subscriptions = getSubscriptions();
    if (!subscriptions.includes(creatorId)) {
      subscriptions.push(creatorId);
      localStorage.setItem(SUBSCRIPTIONS_KEY, JSON.stringify(subscriptions));
    }
  } catch (error) {
    console.error('Failed to subscribe:', error);
  }
};

// Unsubscribe from a channel
export const unsubscribe = (creatorId: string): void => {
  try {
    const subscriptions = getSubscriptions();
    const filtered = subscriptions.filter((id) => id !== creatorId);
    localStorage.setItem(SUBSCRIPTIONS_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error('Failed to unsubscribe:', error);
  }
};

// Toggle subscription
export const toggleSubscription = (creatorId: string): boolean => {
  if (isSubscribed(creatorId)) {
    unsubscribe(creatorId);
    return false;
  } else {
    subscribe(creatorId);
    return true;
  }
};
