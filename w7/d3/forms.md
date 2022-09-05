---
layout: default
permalink: /:path/:basename/
grand_parent: 'Week 7: Intro to React'
parent: 'Advanced state'
nav_order: 2
---

# Forms

Step-by-step:

1. **Get the HTML right.** Have the correct inputs, labels, and test that you can add the right information.
2. **Let React take control.** Add state variables for all of the information in your form. Set the `value` attribute on the inputs, and make `onChange` to change the state when the user changes the input in their browser.

   ```jsx
   const input = (
     <div>
       <label htmlFor="name">Name</label>
       <input
         type="text"
         name="name"
         id="name"
         placeholder="e.g. Daffodil"
         value={name}
         onChange={(event) => setName(event.target.value)}
       />
     </div>
   )
   ```

3. **Submission.** The form should have `onSubmit={handleSubmit}`. `handleSubmit` should have `event.preventDefault()`. Finally, use the state data to call any callback prop, e.g. `addNewItemToList`.

## Form Component Reuse (Advanced)

**This is an advanced concept. If it doesn't make sense, don't worry: you can keep using simple forms throughout the bootcamp.**

If you want to build forms faster, and with less code, this is how we do it. 💡

Forms have a lot of markup.
To save us from having tens or possibly hundreds of `<input>` elements to individually style and add `onChange` handlers,
we can build a reusable `Input` component that is wholly configurable.

Step-by-step:

1. **Create your `Input` component.**

   1. Take one of your inputs and copy it into a new `./components/Input.jsx` file.
   2. For any values that need to differ between input elements, make it a prop.
   3. Add the `formData` and `setFormData` as props.

   4. Set your `onChange` to call `setFormData` with the new value for your form data. This means taking a clone of `formData` and setting the new value for `fieldName`.

   You will probably have props like `{ label, fieldName, inputType, placeholder, formData, setFormData }`.

   Note that you can use `fieldName` to get the right data from `formData` with the square bracket object accessor notation: `formData[fieldName]`.

2. **Group your formData.**

   You can now reduce the state to a single `useState` in your form component. It will contain all the necessary properties to represent whatever you're adding/editing.

   ```jsx
   const [formData, setFormData] = useState({
     city: '',
     name: '',
   })
   ```

   Once you've got your `formData` object as a state variable, you can use it to render an `Input` for one of your fields:

   ```jsx
   <Input
     label="City"
     fieldName="city"
     placeholder="e.g. Paris"
     formData={formData}
     setFormData={setFormData}
   />
   ```

3. **Loop over all your fields.**

   You can loop over all your fields to create your inputs.

   1. Describe your fields as an array of objects, each of which contain only the data you need to create those inputs.

      ```jsx
      const fields = [
        {
          label: 'City',
          fieldName: 'city',
          placeholder: 'e.g. Paris',
        },
        {
          label: 'Dish Name',
          fieldName: 'name',
          placeholder: 'e.g. Falafel Pita',
        },
      ]
      ```

   2. Loop!

      ```jsx
      <form onSubmit={handleSubmit}>
        {fields.map((fieldInfo) => (
          <Input {...fieldInfo} formData={formData} setFormData={setFormData} />
        ))}
        <input type="submit" value="Post New Foodder" />
      </form>
      ```

      All of your inputs are essentially the same _except for what makes them different_: their `label`, `fieldName`, and `placeholder`.

      Because all of these properties are defined for each item in your `fields` array, you can loop over that array, and spread each item's properties to the `Input` component props.
