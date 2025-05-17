const DinnerPage = () => {
    return (
        <div>
                    <div>
                        Calendar
        </div>
            <div className="flex flex-col gap-4">
                <div className="bg-white rounded-lg shadow-md p-4 ">
                    <h2 className="text-lg font-semibold">Event 1</h2>
                    <p className="text-gray-600">Description of Event 1</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-lg font-semibold">Event 2</h2>
                    <p className="text-gray-600">Description of Event 2</p>
                </div>
        </div>
        
        <div>
            <p>Add event</p>
        </div>
        </div>
    );
};

export default DinnerPage