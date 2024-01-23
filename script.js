document.getElementById('myButton').addEventListener('click', function () {
    // Get the message container element
    var messageContainer = document.getElementById('messageContainer');

    // Toggle the "hidden" class to show or hide the message
    messageContainer.classList.toggle('hidden');
});