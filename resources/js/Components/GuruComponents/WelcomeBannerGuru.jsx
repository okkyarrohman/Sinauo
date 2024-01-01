import { imageWelcomeGuru } from "../../../assets";

export default function WelcomeBannerGuru() {
    return (
        <div className="w-full h-44 bg-primary rounded-[0.625rem] flex items-center px-10 overflow-hidden">
            <div className="w-fit">
                <h1 className="text-4xl font-bold text-white w-fit mb-1">
                    Selamat Datang &#x1F44B;
                </h1>
                <p className="text-white w-4/5">
                    Mari belajar dan bertemu inovasi! Mari menjelajahi dunia
                    pembelajaran yang menyenangkan bersama SinauO!
                </p>
            </div>
            <img
                className="w-[27rem] object-cover"
                src={imageWelcomeGuru}
                alt="image banner"
            />
        </div>
    );
}
