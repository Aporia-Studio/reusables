import React from 'react';

interface IResponsiveCols {
    child1: React.ReactNode;
    child2: React.ReactNode;
    child3: React.ReactNode;
}

// Style guide / Helper: Meant to copy and paste tailwind and html code
export const Helper: React.FC<IResponsiveCols> = ({ child1, child2, child3 }: IResponsiveCols) => {
    return (
        <div>
        {/* Heading 1 */}
        <h1 className="text-4xl font-extrabold tracking-tighter pb-5">Lorem ipsum dolor</h1>


        {/* when layout is at sm it will break to make it look good in small devices */}
        <div className="flex flex-col sm:flex-row">
            <div className="w-full lg:w-1/3">
                {child1}
            </div>

            <div className="w-full lg:w-1/3">
                {child2}
            </div>

            <div className="w-full lg:w-1/3">
                {child3}
            </div>
        </div>
        </div>
    );
};

