const loading = document.querySelector(".container_loader");
const headline = document.querySelector(".container_headline");
const field = document.querySelector(".container_field");

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio do formulário

  const cpf = document.getElementById("cpf").value;
  const birthdate = document.getElementById("birthdate").value;

  // Verifica se os campos estão vazios
  if (!cpf || !birthdate) {
    alert("Os campos precisam ser preenchidos corretamente.");
    return; // Interrompe a execução se os campos estiverem vazios
  }

  // Validação do CPF e da data de nascimento
  if (cpf === "02256542378" && birthdate === "28021999") {
    loading.style.display = "flex";
    headline.style.display = "none";
    field.style.display = "none";

    const base_url = "https://api-ma-cliente.equatorialenergia.com.br/"; // Substitua <url> pela URL desejada
    const token =
      "eyJhbGciOiJSUzI1NiIsImtpZCI6IjhiMjA0ZTE2ZDUyYTM5OWYzNDVhNzJlOWI0OWM3N2E1IiwidHlwIjoiSldUIn0.eyJuYmYiOjE3NDM1MTE2MDAsImV4cCI6MTc0NjM5MTYwMCwiaXNzIjoiaHR0cHM6Ly93d3cuZXF1YXRvcmlhbGVuZXJnaWEuY29tLmJyLyIsImF1ZCI6WyJodHRwczovL3d3dy5lcXVhdG9yaWFsZW5lcmdpYS5jb20uYnIvcmVzb3VyY2VzIiwiQXBpRXF1YXRvcmlhbCJdLCJjbGllbnRfaWQiOiJFcXVhdG9yaWFsU2l0ZSIsInN1YiI6IjI6MDIyNTY1NDIzNzgiLCJhdXRoX3RpbWUiOjE3NDM1MTE2MDAsImlkcCI6ImxvY2FsIiwicm9sZSI6WyJ1c2VyIiwic29saWNpdGFudGUiXSwidXNlcm5hbWUiOiIwMjI1NjU0MjM3OCIsImVtYWlsIjoiVFVORUxFMDk1QEdNQUlMLkNPTSIsInNjb3BlIjpbIkFwaUVxdWF0b3JpYWwiXSwiYW1yIjpbIlB3ZCJdLCJ1c2VyRGF0YSI6eyJDcGYiOiIwMjI1NjU0MjM3OCIsIkNyZWRlbmNpYWRvIjpmYWxzZSwiQ29udGFzQ29udHJhdG8iOlt7Ik51bWVybyI6IjAwMzAxMjkyMzYwMCIsIkVuZGVyZWNvIjoiUFJFUyBKIEtVQklUU0NIRUNLIiwiQmFpcnJvIjoiU0FPIEpPU0UiLCJDaWRhZGUiOiJTQU8gUkFJTVVORE8gREFTIE1BTkdBQkVJUkFTIiwiTnVtZXJvSW5zdGFsYWNhbyI6IjAwMTEwNDk1NjcifSx7Ik51bWVybyI6IjAwMzAxOTkxMDExMiIsIkVuZGVyZWNvIjoiUEFSTkFaQSIsIkJhaXJybyI6IlNBTyBKT1NFIiwiQ2lkYWRlIjoiU0FPIFJBSU1VTkRPIERBUyBNQU5HQUJFSVJBUyIsIk51bWVyb0luc3RhbGFjYW8iOiIyMDAwOTAyMTA4In0seyJOdW1lcm8iOiIwMDMwMjI5Mjg3MzEiLCJFbmRlcmVjbyI6IkpVU0NFTElOTyBLVUJJVFNDSEVLIiwiQmFpcnJvIjoiU0FPIEpPU0UiLCJDaWRhZGUiOiJTQU8gUkFJTVVORE8gREFTIE1BTkdBQkVJUkFTIiwiTnVtZXJvSW5zdGFsYWNhbyI6IjIwMDEwMTkxNzcifV0sIk5vbWUiOiJGUkFOS0xZUyIsIlNvYnJlbm9tZSI6IkJBUlJPUyBHVUlNQVJBRVMiLCJRdWFudGlkYWRlQ29udGFzQ29udHJhdG8iOjN9fQ.Pc93JkFuHh3rWrYU0Ac_YJn1ABN59YukPeZDKhnTHrpYahcLygxO1Qqo6F7mRD4mgOPswT9Y4RwwEs6sS0yd0YxpZwgryhPdw2DpMQii82aYOayIoYHMOyun7WkWahXBM3tvm8WVXzVvzuCBCUId73sBcEOOhMCOgFu6oNyVrY78uv5dweN4mu5vhhFadz37gw5GyCkALV-uSmSdpqba9jL27oBCY9ISzac3t_KkStclRUhox21QWrkBg7fVl8JsqUr-XIgHT3Pg76L5spk-0C8HNwS3TKScMAw52G2gtFrG8Fpw2VKkZFmJsF3XMjhM7M6aDn9cziwnhqBU0CIIuA";

    setTimeout(function () {
      localStorage.setItem("base_url", base_url);
      localStorage.setItem("token", token);

      loading.style.display = "none";
      headline.style.display = "flex";
      field.style.display = "flex";
    }, 3000);

    // alert('Dados salvos com sucesso!');
  } else {
    alert("CPF ou Data de Nascimento inválidos.");
  }
});
