import Section from "@/components/Section";
import Headers from "@/components/Headers";
import UploadForm from "@/components/UploadForm";

export default function Home() {
  return (
    <>
      <Headers
        h1Text={"Add epic captions to your videos"}
        h2Text={"Just upload your video and we will do the rest"}
      />
      <div className="text-center">
        <UploadForm />
      </div>
      <Section />
    </>
  );
}
