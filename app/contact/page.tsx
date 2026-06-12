import Image from "next/image";

export default function Contact() {
  return (
    <main>
      <h1>Contact Page</h1>

      <Image
        src="/images/download.jpg"
        alt="Dog"
        width={400}
        height={300}
      />
    </main>
  );
}