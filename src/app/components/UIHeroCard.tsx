import React from 'react';
import WavingHand from '@/../public/images/waving_hand.png';
import NiceView from '@/../public/images/nice_view.jpg';

interface UIHeroCardProps {
    backrgound_image: string;
    title: string;
    sub_title: string;
    related_people: string;
}

const UIHeroCardUtil: React.FC<UIHeroCardProps> = ({
    backrgound_image,
    title,
    sub_title,
    related_people
}: UIHeroCardProps) => {
    return (
        <div
            className={`h-full w-full min-w-[20px] bg-cover bg-no-repeat lg:rounded-tr-3xl 2xl:rounded-3xl`}
            style={{ backgroundImage: `url(${backrgound_image})` }}
        >
            <div className="flex h-full flex-col items-start justify-between border-2  border-blue-100  p-2 text-transparent ease-in hover:text-white lg:px-20 lg:py-10">
                <h3 className="text-lg font-bold ">{title}</h3>
                <p className="">{sub_title}</p>
            </div>
        </div>
    );
};

const UIHeroCard: React.FC = () => {
    return (
        <div className="flex h-full flex-col items-start   lg:px-20 lg:py-10 2xl:mx-auto 2xl:max-w-[1440px]"></div>
    );
};

export default UIHeroCard;
