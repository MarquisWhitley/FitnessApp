import React from 'react';

function BodyTypeMale() {
  return (
    <div>
      <h1>What is your Body Type</h1>

      <div className='body-type_container'>
        <label htmlFor='0%-6%'>
          <input type='radio' name='bodytype' id='0%-6%' />
          <div className='body-type_img'></div>
          <h2>0%-6%</h2>
        </label>
        <label htmlFor='7%-10%'>
          <input type='radio' name='bodytype' id='7%-10%' />
          <div className='body-type_img'></div>
          <h2>7%-10%</h2>
        </label>
        <label htmlFor='11%-15%'>
          <input type='radio' name='bodytype' id='11%-15%' />
          <div className='body-type_img'></div>
          <h2>11%-15%</h2>
        </label>
        <label htmlFor='16%-20%'>
          <input type='radio' name='bodytype' id='16%-20%' />
          <div className='body-type_img'></div>
          <h2>16%-20%</h2>
        </label>
        <label htmlFor='21%-35%'>
          <input type='radio' name='bodytype' id='21%-30%' />
          <div className='body-type_img'></div>
          <h2>21%-35%</h2>
        </label>
        <label htmlFor='36%+'>
          <input type='radio' name='bodytype' id='36%+' />
          <div className='body-type_img'></div>
          <h2>36%+</h2>
        </label>
      </div>
    </div>
  );
}
function BodyTypeFemale() {
  return (
    <div>
      <h1>What is your Body Type</h1>

      <div className='body-type_container'>
        <label htmlFor='10%-15%'>
          <input type='radio' name='bodytype' id='10%-15%' />
          <div className='body-type_img'></div>
          <h2>10%-15%</h2>
        </label>
        <label htmlFor='16%-20%'>
          <input type='radio' name='bodytype' id='16%-20%' />
          <div className='body-type_img'></div>
          <h2>16%-20%</h2>
        </label>
        <label htmlFor='21%-25%'>
          <input type='radio' name='bodytype' id='21%-25%' />
          <div className='body-type_img'></div>
          <h2>21%-25%</h2>
        </label>
        <label htmlFor='26%-30%'>
          <input type='radio' name='26%-30%' id='26%-30%' />
          <div className='body-type_img'></div>
          <h2>26%-30%</h2>
        </label>
        <label htmlFor='31%-40%'>
          <input type='radio' name='bodytype' id='31%-40%' />
          <div className='body-type_img'></div>
          <h2>31%-40%</h2>
        </label>
        <label htmlFor='41%+'>
          <input type='radio' name='bodytype' id='41%+' />
          <div className='body-type_img'></div>
          <h2>41%+</h2>
        </label>
      </div>
    </div>
  );
}

export { BodyTypeMale, BodyTypeFemale };
