import React from "react";
import Swal from "sweetalert2";

const RestaurantCard = ({ id, name, img, rtype }) => {

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this restaurant?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("http://localhost:3000/restaurant/" + id, {
          method: "DELETE",
        })
          .then((res) => {
            if (res.ok) {
              Swal.fire("Deleted!", "The restaurant has been deleted.", "success").then(() => {
                window.location.reload();
              });
            } else {
              throw new Error("Failed to delete");
            }
          })
          .catch((err) => {
            Swal.fire("Error", "There was an error deleting the restaurant", "error");
            console.log(err);
          });
      }
    });
  };

  return (
    <article className="menu-item" key={id}>
      <div className="m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-96">
        <a href="#">
          <img className="rounded-t-lg" src={img} alt={name} />
        </a>
        <div className="p-5">
          <a href="#">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h3>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {rtype}
          </p>
          <a
            href={`/Edit/${id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-3"
          >
            Edit
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => handleDelete(id)}
          >
            Delete
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
};

export default RestaurantCard;
