'use client';

const YoutubeSection = () => {
    const videos = [
        'https://www.youtube.com/embed/5jp7aMUxrNs?si=4C2xi1Cd8Oo50U1P',
        'https://www.youtube.com/embed/LJhjDywpQug?si=q9X4zT7WxN26NTA2',
        'https://www.youtube.com/embed/IHRmQRgZkkc?si=F1gMsH-R6IAfMWBN'
    ];

    return (
        <div className="bg-[#25282c] py-16 px-4 text-center">
            <h1 className="text-6xl font-bold text-white mb-4">Youtube Videos</h1>
            <div className="w-1/4 h-[2px] bg-gray-300 mx-auto mb-10"></div>

            <div className="flex flex-wrap justify-center gap-10">
                {videos.map((src, index) => (
                    <div
                        key={index}
                        className="border-4 border-red-600 rounded-2xl overflow-hidden w-[350px] h-[220px] bg-gray-600"
                    >
                        <iframe
                            className="w-full h-full"
                            src={src}
                            title={`YouTube Video ${index + 1}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default YoutubeSection;
