import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            name:"Full body fitness checkup",
            price:44.89,
            description:"Full body check up is complete health checkup or diagnostic scan of your entire body including heart, kidney, liver, lung to assess your current health status & to screen you to know if you have any apparent warning signs or if any abnormalities lying inside your body. Health checkup can ring the bell early, if there are any symptoms of fatal diseases like cardiovascular diseases, respiratory diseases, cancer, diabetes, high blood pressure, digestive Diseases, etc."
        },
        {
            name:"Build your muscle in 30 days",
            price:59.99,
            description:"When it comes to building muscle, 30 days might not seem like a lot of time, but you can make a transformation in that time provided you have the discipline. Weight training is part of this process, but you also have to pay strict attention to your eating habits. If you fail to feed your body the correct nutrients, you'll compromise your energy levels and not give your muscles what they need for growth."
        },
        {
            name:"Basic training of yoga",
            price:19.99,
            description:"It’s time to roll out your yoga mat and discover the combination of physical and mental exercises that for thousands of years have hooked yoga practitioners around the globe. The beauty of yoga is that you don’t have to be a yogi or yogini to reap the benefits. Whether you are young or old, overweight or fit, yoga has the power to calm the mind and strengthen the body. Don’t be intimidated by yoga terminology, fancy yoga studios and complicated poses. Yoga is for everyone.."
        },
    ];
    return (
        <div className='my-8 container mx-auto'>
            <h1 className='text-5xl text-center font-bold text-komola mb-4 '>Services I provide</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {
                    services.map(service => {
                        return (
                        <div className="p-8 shadow-md bg-orange-200 bg-opacity-25 flex flex-col justify-between">
                             <h1 className=' text-grey text-3xl font-bold '>{service.name}</h1>
                             <p className='text-md mt-4  text-normal font-medium'>{service.description}</p>
                             <button className="text-white p-2 bg-komola w-full mt-12 text-2xl "><Link to="/checkout" state={{ser:service}} >Check this out</Link></button>
                        </div>
                    )
                    })
                }
            </div>
        </div>
    );
};

export default Services;