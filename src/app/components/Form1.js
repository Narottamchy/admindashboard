import React, { useState } from "react";

const ActionButtons = () => {
    return (
        <div className="flex space-x-2">
        <button className="bg-blue-600 flex  text-white px-2 py-1 rounded"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M15.5325 6.9675L11.0325 2.4675C10.9634 2.40004 10.8819 2.34656 10.7925 2.31C10.6995 2.27221 10.6004 2.25187 10.5 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V13.5C2.25 14.0967 2.48705 14.669 2.90901 15.091C3.33097 15.5129 3.90326 15.75 4.5 15.75H13.5C14.0967 15.75 14.669 15.5129 15.091 15.091C15.5129 14.669 15.75 14.0967 15.75 13.5V7.5C15.7506 7.4013 15.7317 7.30345 15.6943 7.21207C15.657 7.12069 15.602 7.03758 15.5325 6.9675ZM6.75 3.75H9.75V5.25H6.75V3.75ZM11.25 14.25H6.75V12C6.75 11.8011 6.82902 11.6103 6.96967 11.4697C7.11032 11.329 7.30109 11.25 7.5 11.25H10.5C10.6989 11.25 10.8897 11.329 11.0303 11.4697C11.171 11.6103 11.25 11.8011 11.25 12V14.25ZM14.25 13.5C14.25 13.6989 14.171 13.8897 14.0303 14.0303C13.8897 14.171 13.6989 14.25 13.5 14.25H12.75V12C12.75 11.4033 12.5129 10.831 12.091 10.409C11.669 9.98705 11.0967 9.75 10.5 9.75H7.5C6.90326 9.75 6.33097 9.98705 5.90901 10.409C5.48705 10.831 5.25 11.4033 5.25 12V14.25H4.5C4.30109 14.25 4.11032 14.171 3.96967 14.0303C3.82902 13.8897 3.75 13.6989 3.75 13.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H5.25V6C5.25 6.19891 5.32902 6.38968 5.46967 6.53033C5.61032 6.67098 5.80109 6.75 6 6.75H10.5C10.6989 6.75 10.8897 6.67098 11.0303 6.53033C11.171 6.38968 11.25 6.19891 11.25 6V4.8075L14.25 7.8075V13.5Z" fill="white"/>
</svg>Edit</button>
        <button className="bg-orange-500 flex  text-white px-2 py-1 rounded"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M15.5325 6.9675L11.0325 2.4675C10.9634 2.40004 10.8819 2.34656 10.7925 2.31C10.6995 2.27221 10.6004 2.25187 10.5 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V13.5C2.25 14.0967 2.48705 14.669 2.90901 15.091C3.33097 15.5129 3.90326 15.75 4.5 15.75H13.5C14.0967 15.75 14.669 15.5129 15.091 15.091C15.5129 14.669 15.75 14.0967 15.75 13.5V7.5C15.7506 7.4013 15.7317 7.30345 15.6943 7.21207C15.657 7.12069 15.602 7.03758 15.5325 6.9675ZM6.75 3.75H9.75V5.25H6.75V3.75ZM11.25 14.25H6.75V12C6.75 11.8011 6.82902 11.6103 6.96967 11.4697C7.11032 11.329 7.30109 11.25 7.5 11.25H10.5C10.6989 11.25 10.8897 11.329 11.0303 11.4697C11.171 11.6103 11.25 11.8011 11.25 12V14.25ZM14.25 13.5C14.25 13.6989 14.171 13.8897 14.0303 14.0303C13.8897 14.171 13.6989 14.25 13.5 14.25H12.75V12C12.75 11.4033 12.5129 10.831 12.091 10.409C11.669 9.98705 11.0967 9.75 10.5 9.75H7.5C6.90326 9.75 6.33097 9.98705 5.90901 10.409C5.48705 10.831 5.25 11.4033 5.25 12V14.25H4.5C4.30109 14.25 4.11032 14.171 3.96967 14.0303C3.82902 13.8897 3.75 13.6989 3.75 13.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H5.25V6C5.25 6.19891 5.32902 6.38968 5.46967 6.53033C5.61032 6.67098 5.80109 6.75 6 6.75H10.5C10.6989 6.75 10.8897 6.67098 11.0303 6.53033C11.171 6.38968 11.25 6.19891 11.25 6V4.8075L14.25 7.8075V13.5Z" fill="white"/>
</svg>Delete</button>
      </div>
    );
  }; 
 
const Form1 = () => {
  const initialTableData = [
    {
      id: 1,
      title1: "Etiam purus in",
      title2: "Curabitur donec duis",
      title3: "Morbi pharetra, accumsan",
      title4: <ActionButtons/>,
    },
    {
      id: 2,
      title1: "Duis eget habitant",
      title2: "At amet odio",
      title3: "Commodo eget scelerisque",
      title4: <ActionButtons/>,
    },
    {
      id: 3,
      title1: "Suspendisse lacinia",
      title2: "Enim feugiat elit",
      title3: "Quis aenean mi",
      title4: <ActionButtons/>,
    },
    {
      id: 4,
      title1: "Amet sed fermentum",
      title2: "Ullamcorper quam elit",
      title3: "Pellentesque vitae nibh",
      title4: <ActionButtons/>,
    },
    {
      id: 5,
      title1: "Morbi vestibulum velit",
      title2: "Sed augue sed",
      title3: "Vitae eu at",
      title4: <ActionButtons/>,
    },
    {
      id: 6,
      title1: "Nulla aenean tellus",
      title2: "Etiam orci orci",
      title3: "Pharetra ultrices in",
      title4: <ActionButtons/>,
    },
    {
      id: 7,
      title1: "Vestibulum vivamus",
      title2: "Erat in lacinia",
      title3: "Vulputate faucibus urna",
      title4: <ActionButtons/>,
    },
    {
      id: 8,
      title1: "Suscipit sit",
      title2: "Eu sapien",
      title3: "Tempor duis ullamcorper",
      title4: <ActionButtons/>,
    },
    {
      id: 9,
      title1: "Lobortis eleifend senectus",
      title2: "Non vivamus pharetra",
      title3: "Nisi consectetur a",
      title4: <ActionButtons/>,
    },
    {
      id: 10,
      title1: "Eget sit elementum",
      title2: "Viverra eu malesuada",
      title3: "Nisi ac urna",
      title4: <ActionButtons/>,
    },
    {
      id: 11,
      title1: "Nulla morbi ultrices",
      title2: "Aliquam augue",
      title3: "Eu sit lacinia",
      title4: <ActionButtons/>,
    },
    {
      id: 12,
      title1: "Curabitur in suscipit",
      title2: "Ut luctus eu",
      title3: "Lorem consequat elementum",
      title4: <ActionButtons/>,
    },
    {
      id: 13,
      title1: "Duis mauris id",
      title2: "Sed vel eu",
      title3: "Sed sit amet",
      title4: <ActionButtons/>,
    },
    {
      id: 14,
      title1: "Pellentesque enim a",
      title2: "Euismod in ultrices",
      title3: "Quisque justo nec",
      title4: <ActionButtons/>,
    },
    {
      id: 15,
      title1: "Mauris ac tincidunt",
      title2: "Nunc aenean",
      title3: "Mi eu enim",
      title4: <ActionButtons/>,
    },
    {
      id: 16,
      title1: "Lectus adipiscing",
      title2: "Sem venenatis",
      title3: "Nibh adipiscing ac",
      title4: <ActionButtons/>,
    },
    {
      id: 17,
      title1: "Gravida turpis mauris",
      title2: "Commodo facilisis non",
      title3: "A in duis",
      title4: <ActionButtons/>,
    },
    {
      id: 18,
      title1: "Aliquet tortor ac",
      title2: "In sed eu",
      title3: "Faucibus suspendisse feugiat",
      title4: <ActionButtons/>,
    },
    {
      id: 19,
      title1: "Fusce nunc arcu",
      title2: "Pellentesque lacus",
      title3: "Elit duis aenean",
      title4: <ActionButtons/>,
    },
    {
      id: 20,
      title1: "Fusce congue urna",
      title2: "Nunc urna neque",
      title3: "Fringilla integer lacinia",
      title4: <ActionButtons/>,
    },
    {
      id: 21,
      title1: "Non consectetur nec",
      title2: "Ultrices tempus eu",
      title3: "Eu gravida quis",
      title4: <ActionButtons/>,
    },
    {
      id: 22,
      title1: "Augue molestie amet",
      title2: "Sagittis donec",
      title3: "Id orci sollicitudin",
      title4: <ActionButtons/>,
    },
    {
      id: 23,
      title1: "Non faucibus malesuada",
      title2: "Sed est risus",
      title3: "Vestibulum eu sem",
      title4: <ActionButtons/>,
    },
    {
      id: 24,
      title1: "Id nec duis",
      title2: "Erat nisi ut",
      title3: "Lobortis gravida feugiat",
      title4: <ActionButtons/>,
    },
    {
      id: 25,
      title1: "Sed tellus in",
      title2: "Fermentum lectus eu",
      title3: "Augue odio libero",
      title4: <ActionButtons/>,
    },
    {
      id: 26,
      title1: "Etiam elementum quam",
      title2: "Duis eget duis",
      title3: "Purus orci ut",
      title4: <ActionButtons/>,
    },
    {
      id: 27,
      title1: "Elit non amet",
      title2: "Purus in id",
      title3: "Risus lacinia scelerisque",
      title4: <ActionButtons/>,
    },
    {
      id: 28,
      title1: "Fermentum amet suscipit",
      title2: "Vitae id sapien",
      title3: "Eu sed tincidunt",
      title4: <ActionButtons/>,
    },
    {
      id: 29,
      title1: "Risus tristique quam",
      title2: "In pellentesque eu",
      title3: "Mi donec velit",
      title4: <ActionButtons/>,
    },
    {
      id: 30,
      title1: "Nibh quam velit",
      title2: "Diam odio eu",
      title3: "Consectetur id ultrices",
      title4: <ActionButtons/>,
    },
    {
      id: 31,
      title1: "Nulla lobortis consequat",
      title2: "Quam scelerisque",
      title3: "Feugiat ultrices pharetra",
      title4: <ActionButtons/>,
    },
    {
      id: 32,
      title1: "Erat suspendisse mauris",
      title2: "Neque turpis id",
      title3: "Consequat nec mauris",
      title4: <ActionButtons/>,
    },
    {
      id: 33,
      title1: "Sed ipsum odio",
      title2: "Eu amet nisi",
      title3: "Tempor ut amet",
      title4: <ActionButtons/>,
    },
    {
      id: 34,
      title1: "In mauris amet",
      title2: "Ultrices nisi vestibulum",
      title3: "Eget elit donec",
      title4: <ActionButtons/>,
    },
    {
      id: 35,
      title1: "Pharetra lobortis adipiscing",
      title2: "Luctus eu euismod",
      title3: "Orci velit purus",
      title4: <ActionButtons/>,
    },
    {
      id: 36,
      title1: "Eget mi duis",
      title2: "Molestie est in",
      title3: "Consectetur mi orci",
      title4: <ActionButtons/>,
    },
    {
      id: 37,
      title1: "Sagittis eu a",
      title2: "Odio mi purus",
      title3: "Pharetra amet libero",
      title4: <ActionButtons/>,
    },
    {
      id: 38,
      title1: "Erat arcu at",
      title2: "Sed lacinia suspendisse",
      title3: "Quisque tempor et",
      title4: <ActionButtons/>,
    },
    {
      id: 39,
      title1: "Vivamus bibendum quam",
      title2: "Faucibus vitae amet",
      title3: "Tincidunt eget nisi",
      title4: <ActionButtons/>,
    },
    {
      id: 40,
      title1: "Non molestie elit",
      title2: "Vulputate pharetra ac",
      title3: "Aenean orci vel",
      title4: <ActionButtons/>,
    },
    {
      id: 41,
      title1: "In duis quis",
      title2: "Malesuada aliquam non",
      title3: "Sed enim a",
      title4: <ActionButtons/>,
    },
    {
      id: 42,
      title1: "Pharetra euismod sagittis",
      title2: "Vestibulum amet ut",
      title3: "Duis vitae suspendisse",
      title4: <ActionButtons/>,
    },
    {
      id: 43,
      title1: "Sed aenean a",
      title2: "Egestas eu turpis",
      title3: "Elementum nec donec",
      title4: <ActionButtons/>,
    },
    {
      id: 44,
      title1: "Dui eu odio",
      title2: "Nulla odio quis",
      title3: "Mauris turpis in",
      title4: <ActionButtons/>,
    },
    {
      id: 45,
      title1: "Faucibus ut duis",
      title2: "Neque gravida luctus",
      title3: "Purus nec feugiat",
      title4: <ActionButtons/>,
    },
  ];

  const itemsPerPage = 9;
  const totalPages = Math.ceil(initialTableData.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTableData = initialTableData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div className="m-6 bg-white shadow-md rounded-lg p-8 overflow-hidden">
      <h2 className="text-2xl font-bold mb-4">Form Title</h2>
      <p className="text-sm mb-4">
        Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue
        enim.
      </p>
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded overflow-hidden relative mb-4">
        <div className="flex items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
              fill="#7F1D1D"
            />
          </svg>
          Senectus malesuada suspendisse bibendum elit amet vitae.
        </div>
      </div>
      <div className="overflow-x-auto">
  <table className="table-auto w-full">
    <colgroup>
      <col style={{ width: "28%" }} />
      <col style={{ width: "28%" }} />
      <col style={{ width: "28%" }} />
      <col style={{ width: "16%" }} />
    </colgroup>
    <thead>
      <tr className="bg-gray-300">
        <th className="px-4 py-2 text-left">Table Title</th>
        <th className="px-4 py-2 text-left">Table Title</th>
        <th className="px-4 py-2 text-left">Table Title</th>
        <th className="px-4 py-2 text-left">Table Title</th>
      </tr>
    </thead>
    <tbody>
      {currentTableData.map((rowData) => (
        <tr
          key={rowData.id}
          className={rowData.id % 2 === 0 ? "bg-white" : "bg-gray-100"}
        >
          <td className="border px-4 py-2">{rowData.title1}</td>
          <td className="border px-4 py-2">{rowData.title2}</td>
          <td className="border px-4 py-2">{rowData.title3}</td>
          <td className="border px-4 py-2">{rowData.title4}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      <div className="flex justify-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">

<path d="M9.5 14L5 9.5L9.5 5" stroke="#262626" strokeWidth="2"/>
<path d="M14 14L9.5 9.5L14 5" stroke="#262626" strokeWidth="2"/>
</svg>
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-1 mx-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-600 text-white"
                : "bg-white border text-gray-700"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
<path d="M9.5 14L14 9.5L9.5 5" stroke="#262626" strokeWidth="2"/>
<path d="M5 14L9.5 9.5L5 5" stroke="#262626" strokeWidth="2"/>
</svg>
        </button>
      </div>
    </div>
  );
};

export default Form1;
