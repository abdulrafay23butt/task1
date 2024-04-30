function Mailbox({ unreadMessages }) {
  const unreadMessagesCount = unreadMessages.length;

  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessagesCount > 0 &&
        <p>You have {unreadMessagesCount} unread messages.</p>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];

function App() {
  return (
    <div>
      <Mailbox unreadMessages={messages} />
    </div>
  );
}
export default App;