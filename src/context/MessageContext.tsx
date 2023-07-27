import { createContext, useReducer } from "react";

interface ReplyProps {
  _id: string;
  name: string;
  comment: string;
  image: string;
  createdAt: string;
}

interface MessageContextValue {
  messages: ReplyProps[];
}

export const MessageContext = createContext<MessageContextValue | null>(null);

export const messagesReducer = (state, action) => {
  switch (action.type) {
    case "SET_MESSAGES":
      return {
        messages: action.payload,
      };
    default:
      return state;
  }
};

export function MessageContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(messagesReducer, {
    messages: null,
  });

  return (
    <MessageContext.Provider value={{ state, dispatch }}>
      {children}
    </MessageContext.Provider>
  );
}

export default { MessageContext, messagesReducer, MessageContextProvider };
