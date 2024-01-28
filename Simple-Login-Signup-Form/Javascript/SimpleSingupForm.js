async function LoginGoogle(){
    const { value: email } = await Swal.fire({
        title: "Your email address",
        input: "email",
        inputPlaceholder: "Enter your email address"
      });
      if (email) {
        Swal.fire('Please check your email');
      }
}

function Signup(){
    Swal.fire({
        icon: "success",
        title: "Sign Up Successful",
        showConfirmButton: false,
        timer: 2000
      });
}
