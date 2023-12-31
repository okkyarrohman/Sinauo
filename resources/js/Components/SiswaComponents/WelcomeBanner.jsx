import { imageWelcomeBanner } from "../../../assets";

export default function WelcomeBanner() {
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
            <img className="h-48" src={imageWelcomeBanner} alt="image banner" />
        </div>
    );
}
