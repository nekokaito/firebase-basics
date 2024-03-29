

const User = ({user}) => {
   
    const {displayName, email, photoURL} = user;
  
    return (
        <div className="border border-gray-200 w-[500px] p-3  flex gap-7 rounded-2xl my-2">
            <div className="flex justify-center">
            <img className="rounded-full border-blue-400  border-2" src={photoURL} alt="" />
            </div>
            <div className="flex flex-col gap-3">
            <h1 className="font-bold text-xl text-gray-600">{displayName}</h1>
            <h1 className="font-bold text-sm text-gray-300">{email}</h1>
            </div>
            
        </div>
    );
};

export default User;