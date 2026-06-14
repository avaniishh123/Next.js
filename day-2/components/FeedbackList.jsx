export default function FeedbackList({ feedbacks }) {
  return (
    <div className="space-y-4 mt-6">
      {feedbacks.map((item) => (
        <div
          key={item.id}
          className="bg-gray-100 p-4 rounded shadow"
        >
          <h2 className="font-bold">{item.name}</h2>
          <p>{item.message}</p>
        </div>
      ))}
    </div>
  );
}