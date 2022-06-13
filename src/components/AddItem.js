import React, {useState} from 'react';

function AddItem({onSubmitNewItem}) {
  const [formData, setFormData] = useState({
    description:'',
    location:'',
    image:''
  })

  function handleChange (event) {
    const name = event.target.name;
    const value = event.target.value;

    const newFormData = {...formData, [name]:value};
    setFormData(newFormData);
  }

  function handleSubmit(e){
    e.preventDefault();
    fetch('http://localhost:6001/listings', {
      method:'POST',
      headers: {'Content-type': 'application/json'}, 
      body: JSON.stringify(formData)
    })
    .then(resp => resp.json())
    .then(data => onSubmitNewItem(data))
  };

  return (
    <div className= "new-item-container">
      <h2>Add free item</h2>
      <form className='new-item'>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description} 
          placeholder='Add item description'
          onChange={handleChange}
        />
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location} 
          placeholder='Add item location'
          onChange={handleChange}
        />
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image} 
          placeholder='Add item image link'
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit new Item</button>
      </form>
    </div>
  )
}

export default AddItem;