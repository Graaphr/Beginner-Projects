async function Answer(){
    const { value: date } = await Swal.fire({
        title: "HOORAY YOU SAID YES! ^^",
        text: "SO WHEN CAN WE MEET?",
        confirmButtonText: "SUBMIT",
        input: "date",
        didOpen: () => {
          const today = (new Date()).toISOString();
          Swal.getInput().min = today.split("T")[0];
        }
      });
      if (date) {
        Swal.fire("I'LL BE WAITING ^^", date);
      };
}
