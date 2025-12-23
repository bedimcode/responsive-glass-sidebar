/*=============== SHOW SIDEBAR ===============*/
const showSidebar = (toggleId, sidebarId) => {
   const toggle = document.getElementById(toggleId),
         sidebar = document.getElementById(sidebarId)

   toggle.addEventListener('click', () => {
      sidebar.classList.toggle('show-sidebar')
   })
}
showSidebar('header-toggle','sidebar')

/*=============== SHOW SIDEBAR LIST ===============*/
const drop = document.querySelectorAll('.drop')

drop.forEach(item => {
   const dropBtn = item.querySelector('.drop__button'),
         dropList = item.querySelector('.drop__list')

   dropBtn.addEventListener('click', () => {
      // 2. Close any other drop that are open
      const openItem = document.querySelector('.show-drop') // Search if there are any open drop

      // Check if there is an open drop
      if (openItem && openItem !== item) {
         const openList = openItem.querySelector('.drop__list')
         openList.removeAttribute('style')
         openItem.classList.remove('show-drop')
      }

      // 1. Show drop list (Ask if the drop is open or closed)
      if (item.classList.contains('show-drop')) {
         // If it's OPEN → IT CLOSES
         dropList.removeAttribute('style')
         item.classList.remove('show-drop')
      } else {
         // If it's CLOSED → IT OPENS
         dropList.style.height = dropList.scrollHeight + 'px'
         item.classList.add('show-drop')
      }
   })
})
