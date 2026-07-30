import Bio from "./components/Bio";
import BioImg from "./assets/woolie-sheep.png";
import SocialLink from "./components/SocialLink";
import Socials from "./data/socials.json";

const socialLinks = Socials.map(({ platform, url }, index) => (
  <SocialLink key={index} url={url}>
    {platform}
  </SocialLink>
));
function App() {
  return (
    <main className="bg-[#141414] w-screen h-screen flex justify-center items-center">
      <div className="card bg-[#1f1f1f] text-white w-5/6 md:w-1/3 rounded-2xl flex flex-col justify-center items-center py-4">
        <Bio
          imgSrc={BioImg}
          imgAlt="Picture of social links owner"
          name="Izie Zahba"
          location="Selangor, Malaysia"
          quote="Front-end developer and avid insomniac."
        />

        <nav className="flex flex-col justify-center gap-3 w-full px-4 md:px-12 m-6">
          {socialLinks}
        </nav>

        <section className="flex justify-center">
          <div className="flex flex-col items-center">
            <p>
              Challenge by{" "}
              <a
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
                className="underline text-[#c5f82a] hover:text-white"
              >
                Frontend Mentor
              </a>
              .
            </p>
            <p>
              Coded by{" "}
              <a
                href="https://www.iziezahba.com"
                className="underline text-[#c5f82a] hover:text-white"
              >
                Izie
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
