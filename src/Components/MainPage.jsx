import React from 'react'
import DropdownRender from './Dropdown';

 function MainPage() {
  return (
    <div>
        <div className="grid grid-cols-2 mx-auto gap-4 bg-slate-900 text-white h-96  ">
            <div className='border-r'>
                     <div className='flex p-3'>
                            <DropdownRender/>
                    </div>
                <div>
                   
                    <div className='flex p-3'>Player Name :
                    </div>
                    <div class="flex p-3 ">Base Price :  
                        <div class="flex items-center mr-4 ml-2">
                            <input id="inline-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="inline-radio" class="ml-2 text-sm font-medium   dark:text-gray-300">5</label>
                        </div>
                        <div class="flex items-center mr-4">
                            <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="inline-2-radio" class="ml-2 text-sm font-medium   dark:text-gray-300">10</label>
                        </div>
                        <div class="flex items-center mr-4">
                            <input checked id="inline-checked-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="inline-checked-radio" class="ml-2 text-sm font-medium   dark:text-gray-300">15</label>
                        </div>

    
                    </div>
                    <div className='flex'>
                        {/* ABCD */}
                    </div>
                </div>

            </div>
                <div>
                    <h2>Bidder area</h2>
                </div>
        </div>
      {/* <div className="container  flex justify-center  items-center font-montserrat ">
          <p>ABC</p>
      </div> */}
    </div>
  )
}
export default MainPage;