const openButton = document.querySelector(".open-modal");
        const closeButton = document.querySelector(".close-modal");
        const modalOverlay = document.querySelector(".modal-overlay");
        const modal = document.querySelector(".modal");

        
        function openModal() {
            modalOverlay.style.display = "flex";
        }

        function closeModal() {
            modalOverlay.style.display = "none";
        }

        openButton.addEventListener("click", openModal);

        
        closeButton.addEventListener("click", closeModal);

        
        modalOverlay.addEventListener("click", closeModal);

        
        modal.addEventListener("click", (event) => {
            event.stopPropagation();
        });