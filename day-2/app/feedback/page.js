import FeedbackForm from "../../components/FeedbackForm";
import FeedbackList from "../../components/FeedbackList";

async function getFeedbacks() {
  const res = await fetch("http://localhost:3000/api/feedback", {
    cache: "no-store",
  });

  return res.json();
}

export default async function FeedbackPage() {
  const feedbacks = await getFeedbacks();

  return (
    <main className="min-h-screen bg-gray-200 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Feedback App
        </h1>

        <FeedbackForm />
        <FeedbackList feedbacks={feedbacks} />
      </div>
    </main>
  );
}