import { helplineData } from "./utils.js";

const cardContainer = document.getElementById("card-container");

// createCardElements() && appendCardElements()
(() => {
  helplineData.forEach((cardData) => {
    const cardHTML = `
        <div class="p-8 bg-white shadow-sm rounded-xl flex flex-col gap-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-center p-3.5 rounded-2xl
                ${
                  cardData.description === "Police"
                    ? "bg-[#DFEFFF]"
                    : "bg-[#FFE3E2]"
                }">
                    <img class="size-8 " src=${cardData.image} alt=${
      cardData.description
    }>
                </div>
                <i class="fa-regular fa-heart text-2xl transition-all duration-200 ease-out hover:scale-110"></i>
            </div>
            <div class="flex flex-col gap-6">
                <div class="flex flex-col gap-0.5">
                    <h2 class="font-madurai font-bold text-2xl leading-8 truncate">${
                      cardData.service
                    }</h2>
                    <p class="font-roboto text-lg text-subtitle truncate">${
                      cardData.description
                    }</p>
                </div>
                <div class="flex flex-col gap-0.5 items-start">
                    <h2 class="font-roboto font-bold text-[2rem] w-full overflow-hidden text-ellipsis">${
                      cardData.number
                    }</h2>
                    <p class="px-4 py-1.5 bg-tag-bg rounded-full">${
                      cardData.category
                    }</p>
                </div>
                <div class="grid grid-cols-2 gap-2 *:rounded-lg *:py-2.5 *:font-roboto *:text-base">
                    <button class="border border-call-btn text-subtitle transition-all ease-out duration-200 hover:text-black hover:border-black"><i class="fa-regular fa-copy"></i>
                        Copy</button>
                    <button class="bg-primary border-0 text-white transitoin-all ease-out duration-150 hover:bg-primary/50"><i class="fa-solid fa-phone"></i>
                        Call</button>
                </div>
            </div>
        </div>
    `;
    cardContainer.innerHTML += cardHTML;
  });
})();
