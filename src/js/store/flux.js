const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      loadAllContacts: () => {
        fetch(
          "https://playground.4geeks.com/apis/fake/contact/agenda/Marco_Agenda"
        )
          .then((response) => response.json())
          .then((response) => {
            console.log("Success:", response);
            setStore({ contacts: response });
          });
      },
    },
  };
};

export default getState;
