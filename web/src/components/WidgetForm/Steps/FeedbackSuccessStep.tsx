import { CloseButton } from "../../CloseButton";

interface FeedbackSuccessStepProps {
    onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({
    onFeedbackRestartRequested
}: FeedbackSuccessStepProps) {
    return (
        <>
            <header>
                <CloseButton />
            </header>

            <div className="flex flex-col items-center py-10 w-[304px]">
                <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_49_668)">
                        <path d="M40.5 34C40.5 36.209 38.709 38 36.5 38H8.5C6.291 38 4.5 36.209 4.5 34V6C4.5 3.791 6.291 2 8.5 2H36.5C38.709 2 40.5 3.791 40.5 6V34Z" fill="#77B255" />
                        <path d="M33.78 8.36199C32.624 7.61099 31.076 7.93999 30.322 9.09799L19.436 25.877L14.407 21.227C13.393 20.289 11.811 20.352 10.874 21.365C9.93703 22.379 9.99903 23.961 11.013 24.898L18.222 31.564C18.702 32.009 19.312 32.229 19.918 32.229C20.591 32.229 21.452 31.947 22.017 31.09C22.349 30.584 34.517 11.82 34.517 11.82C35.268 10.661 34.938 9.11299 33.78 8.36199Z" fill="white" />
                    </g>
                    <defs>
                        <filter id="filter0_d_49_668" x="-1.5" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_49_668" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_49_668" result="shape" />
                        </filter>
                    </defs>
                </svg>

                <span className="text-xl mt-2">Agradecemos o feedback!</span>

                <button
                    onClick={onFeedbackRestartRequested}
                    className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500"
                >
                    Quero enviar outro
                </button>

            </div>
        </>
    );
}