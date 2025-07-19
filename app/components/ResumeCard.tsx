import React from "react";

interface Resume {
    id: string;
    companyName: string;
    jobTitle: string;
    feedback: {
        overallScore: number;
    };
    imagePath: string; // ✅ expects something like "resume01.png"
}

const ResumeCard: React.FC<{ resume: Resume }> = ({ resume }) => {
    const { id, companyName, jobTitle, feedback, imagePath } = resume;

    return (
        <div className="resume-card">
            <div className="resume-card-header flex justify-between items-center">
                <div>
                    <h2 className="font-bold text-black">{companyName}</h2>
                    <h3 className="text-gray-500">{jobTitle}</h3>
                </div>
                <div>
                    <span className="text-xl">{feedback.overallScore}</span>
                </div>
            </div>
            <div className="w-full h-[300px] mt-2">
                <img
                    src={`/${imagePath}`} // ✅ correct path to public folder image
                    alt="Resume"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default ResumeCard;
