import { useForm } from "react-hook-form";
import { RxCross2 } from "../../utils/Icons";

interface DelsheyProps {
  onClose: () => void;
}

const Delshey = ({ onClose }: DelsheyProps) => {
  const { register } = useForm();

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed z-40 inset-0 bg-black/50 flex items-start justify-center overflow-hidden"
      onClick={handleBackdropClick}
    >
      <div className="bg-white relative w-full max-w-4xl mx-4 my-8 max-h-[calc(100vh-4rem)] overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center border-b border-gray-200 py-4 sticky top-0 bg-white">
            <h2 className="text-xl font-monlam">འགྲེལ་བཤད།</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <RxCross2 />
            </button>
          </div>

          {/* Form Content */}
          <form className="mt-6 space-y-6">
            {/* First Row - Required Fields */}
            <div className="space-y-4">
              <div className="flex items-center">
                <label className="text-red-500 mr-1">*</label>
                <label className="w-24">འགྲེལ་པ།</label>
                <input
                  className="flex-1 border-b border-black outline-none"
                  {...register("explanation", { required: true })}
                />
              </div>
              <div className="flex items-center">
                <label className="text-red-500 mr-1">*</label>
                <label className="w-24">དཔེར་བརྗོད་ཚིག་གྲུབ།</label>
                <input
                  className="flex-1 border-b border-black outline-none"
                  {...register("example", { required: true })}
                />
              </div>
            </div>

            {/* Second Row - Toggle and Dropdowns */}
            <div className="flex space-x-8 items-center">
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">པར་རིས་དགོས།</span>
                <label className="relative inline-block w-12 h-6 cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    {...register("toggle")}
                  />
                  <span className="absolute inset-0 bg-gray-300 rounded-full transition-colors duration-300 ease-in-out peer-checked:bg-blue-500" />
                  <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out peer-checked:translate-x-6" />
                </label>
              </div>
              <div className="flex-1">
                <select
                  className="w-full border-b border-black outline-none pb-2"
                  {...register("dropdown1")}
                >
                  <option value="">བརྡ་སྤྲོད་དབྱེ་བའི་སྡེ་ཚན།</option>
                </select>
              </div>
              <div className="flex-1">
                <select
                  className="w-full border-b border-black outline-none pb-2"
                  {...register("dropdown2")}
                >
                  <option value="">སྤྱོད་སྒོ།</option>
                </select>
              </div>
            </div>

            {/* Third Row - Tabs and Content */}
            <div>
              <div className="flex space-x-2">
                <button className="border rounded-lg px-4 py-1">མཆན། ༡</button>
                <button className="border rounded-lg px-4 py-1">མཆན། ༢</button>
                <button className="border rounded-lg px-4 py-1 flex items-center">
                  <span className="text-lg">+</span>
                </button>
              </div>
              <div className="mt-4">
                <input
                  placeholder="ལུང་།"
                  className="w-full border-b border-black outline-none pb-2"
                  {...register("content")}
                />
              </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-4 gap-4">
              <div>
                <label>མཚན་བྱང་བསྡུས་པ།</label>
                <input
                  className="w-full border-b border-black outline-none"
                  {...register("field1")}
                />
              </div>
              <div>
                <label>རྩོམ་པ་པོ་མིང་།</label>
                <input
                  className="w-full border-b border-black outline-none"
                  {...register("field2")}
                />
              </div>
              <div>
                <label>ལོ་ཙཱ་བ་མིང་།</label>
                <input
                  className="w-full border-b border-black outline-none"
                  {...register("field3")}
                />
              </div>
              <div>
                <label>གཏེར་སྟོན་མིང་།</label>
                <input
                  className="w-full border-b border-black outline-none"
                  {...register("field4")}
                />
              </div>
            </div>

            {/* Location Fields */}
            <div>
              <label className="block mb-2">LOCATION</label>
              <div className="grid grid-cols-4 gap-4">
                <input
                  placeholder="པོད་ཕྲེང་།"
                  className="border-b border-black outline-none pb-2"
                  {...register("location1")}
                />
                <input
                  placeholder="ཤོག་གྲངས།"
                  className="border-b border-black outline-none pb-2"
                  {...register("location2")}
                />
                <select
                  className="border-b border-black outline-none pb-2"
                  {...register("location3")}
                >
                  <option value="">ཤོག་ལྡེབ།</option>
                  <option value="">ས་</option>
                  <option value="">ན་</option>
                </select>
                <input
                  placeholder="ཐིག་ཕྲེང་།"
                  className="border-b border-black outline-none pb-2"
                  {...register("location4")}
                />
              </div>
            </div>
            <div>
              <input
                placeholder="BDRC LINK"
                className="w-full border-b border-black outline-none pb-2"
                {...register("bdrcLink")}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
              >
                འཇུག་འགོས།
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Delshey;
