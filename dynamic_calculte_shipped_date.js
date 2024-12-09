// Function to format the date as "Dec 07"
function formatDate(date) {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = String(date.getDate()).padStart(2, "0");
    const month = monthNames[date.getMonth()];
    return `${month} ${day}`;
  }
  
  // Function to calculate remaining time (from 24 hours today) in hours and minutes
  function calculateTimeRemaining() {
    const currentDate = new Date();
  
    // Get the start of the day at 12:00 AM (midnight)
    const orderStartTime = new Date(currentDate);
    orderStartTime.setHours(0, 0, 0, 0); // Set time to 12:00 AM
  
    // Get the current time of the day
    const currentTime = new Date();
  
    // Calculate the difference in milliseconds
    const timeElapsed = currentTime - orderStartTime;
  
    // Total time in 24 hours (in milliseconds)
    const totalTime = 24 * 60 * 60 * 1000;
  
    // Remaining time in milliseconds
    const remainingTime = totalTime - timeElapsed;
  
    // Convert remaining time to hours and minutes
    const remainingHours = Math.floor(remainingTime / (1000 * 60 * 60)); // Hours
    const remainingMinutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    ); // Minutes
  
    return `${remainingHours} hours ${remainingMinutes}`;
  }
  
  // Function to generate the order date information
  function generateOrderDates() {
    const currentDate = new Date();
  
    // Ordered Date at 12:00 AM (start of the current day)
    const orderedDate = new Date(currentDate.setHours(0, 0, 0, 0)); // Reset to 12:00 AM
    const formattedOrderedDate = formatDate(new Date(orderedDate));
  
    // Shipped Date: Current date + 3 or 5 days
    const shippedDateStart = new Date(currentDate);
    shippedDateStart.setDate(currentDate.getDate() + 3); // Add 3 days for the start of shipped date
    const shippedDateEnd = new Date(shippedDateStart);
    shippedDateEnd.setDate(shippedDateStart.getDate() + 2); // Add 2 more days for the end of shipped date
    const shippedDateRange = `${formatDate(
      shippedDateStart
    )} - ${formatDate(shippedDateEnd)}`;
  
    // Delivery Date: Dec 17 11:59 PM (end of day)
    const deliveryDateStart = new Date(currentDate);
    deliveryDateStart.setMonth(11); // December
    deliveryDateStart.setDate(17); // 17th Dec
    deliveryDateStart.setHours(23, 59, 59, 999); // Set to 11:59 PM (end of the day)
  
    const deliveryDateEnd = new Date(deliveryDateStart);
    deliveryDateEnd.setDate(23); // Delivery ends on Dec 23
    const deliveryDateRange = `${formatDate(
      deliveryDateStart
    )} - ${formatDate(deliveryDateEnd)}`;
  
    // Calculate remaining time until midnight (24-hour count)
    const timeRemaining = calculateTimeRemaining();
  
    // Display the dates in the HTML
    document.getElementById(
      "ordered-date"
    ).textContent = `${formattedOrderedDate}`;
    document.getElementById(
      "shipped-date"
    ).textContent = `${shippedDateRange}`;
  
    // Update all elements with the class "delivery-date"
    const deliveryElements = document.querySelectorAll(".delivery-date");
    deliveryElements.forEach((element) => {
      element.textContent = `${deliveryDateRange}`;
    });
  
    // Display the remaining time until midnight (24-hour basis)
    document.getElementById(
      "seckill_time"
    ).textContent = `${timeRemaining}`;
  }
  
  // Call the function to generate the order dates
  generateOrderDates();
  
  const interval = setInterval(() => {
    const append_test = document.querySelector('#product-options-ho4ed2r6cwo')
    console.log(append_test)
    if (append_test) {
      clearInterval(interval)
      document.querySelector('.bundle-container-ts').append(append_test);
    }
  }, 10)
  setTimeout(() => {
    clearInterval(interval)
  }, 5000)
  delivery and shipped are not update by order date,make it dynamicilly calculate by order date 