import { feedbacks } from "../../../data/feedbackData";

export async function GET() {
  return Response.json(feedbacks);
}

export async function POST(request) {
  const body = await request.json();

  const name = body.name.trim();
  const message = body.message.trim();

  // Validation
  if (!name || !message) {
    return Response.json(
      { error: "Name and feedback are required" },
      { status: 400 }
    );
  }

  const newFeedback = {
    id: Date.now(),
    name,
    message,
  };

  feedbacks.push(newFeedback);

  return Response.json({
    message: "Feedback submitted successfully",
    feedback: newFeedback,
  });
}