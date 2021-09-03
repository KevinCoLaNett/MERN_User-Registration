import { useForm } from 'react-hook-form';

export const UserForm = ({ user, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { 
      firstName: user ? user.firstName : "", 
      middleName: user ? user.middleName : "",
      lastName: user ? user.lastName : "",
      age: user ? user.age : "",
      gender: user ? user.gender : "",
      address: user ? user.address : "",
      emailAddress: user ? user.emailAddress : "",
      civilStatus: user ? user.civilStatus : "",
    }
  });

  const submitHandler = handleSubmit((data) => {
    onSubmit(data);
  });

    return (
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="firstname">First Name:</label>
          <input className="form-control" type="text" name="firstname" id="firstname" {...register('firstName', { required: true })} />
        </div>
        <br></br>

        <div className="form-group">
          <label htmlFor="middlename">Middle Name:</label>
          <input className="form-control" type="text" name="middlename" id="middlename" {...register('middleName', { required: true })} />
        </div>
        <br></br>

        <div className="form-group">
          <label htmlFor="lastname">Last Name:</label>
          <input className="form-control" type="text" name="lastname" id="lastname" {...register('lastName', { required: true })} />
        </div>
        <br></br>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input className="form-control" type="number" name="age" id="age" {...register('age', { required: true })} />
        </div>
        <br></br>

        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <input className="form-control" type="text" name="gender" id="gender" {...register('gender', { required: true })} />
        </div>
        <br></br>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input className="form-control" type="text" name="address" id="address" {...register('address', { required: true })} />
        </div>
        <br></br>

        <div className="form-group">
          <label htmlFor="emailaddress">Email Address:</label>
          <input className="form-control" type="email" name="emailaddress" id="emailaddress" {...register('emailAddress', { required: true })} />
        </div>
        <br></br>
        
        <div className="form-group">
          <label htmlFor="civilstatus">Civil Status:</label>
          <input className="form-control" type="text" name="civilstatus" id="civilstatus" {...register('civilStatus', { required: true })} />
        </div>
        <br></br>
        
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Save User</button>
        </div>
        <br></br>
      </form>
    );
 };