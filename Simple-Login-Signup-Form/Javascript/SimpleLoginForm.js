async function Forgot(){
    const { value: email } = await Swal.fire({
        title: "Your email address",
        input: "email",
        inputPlaceholder: "Enter your email address"
      });
      if (email) {
        Swal.fire('Please check your email');
      }
}

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

function Login(){
    Swal.fire({
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 2000
      });
}
