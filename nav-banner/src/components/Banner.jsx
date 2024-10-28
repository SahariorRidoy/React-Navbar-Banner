

const Banner = () => {
    return (
        <div className="bg-cover bg-no-repeat h-[800px] w-full rounded-lg flex items-center" style={{
            backgroundImage:'url(https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
            }}>
            
            <div className="">
            <h1 className="text-green-500 font-bold text-7xl">This is a example Banner making in React using tailwind</h1>
            <p className="max-w-[600px] mx-auto text-white py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tempora ducimus consectetur nesciunt incidunt molestiae quia? Dolorem sed nostrum ad quidem impedit aut dolor eius veniam debitis nisi, ratione vitae?</p>
            <button className="bg-orange-500 p-3 rounded-xl text-white font-bold hover:bg-orange-700">More Details</button>
            </div>
             
        </div>
    );
};

export default Banner;