$(document).ready(function(){
    // Code to handle adding items to the closet
    $("#add-item-btn").click(function(){
        var itemName = $("#item-name").val();
        var itemImage = $("#item-image").val(); // You need to handle file upload properly
        // Send data to server using AJAX for processing and storing i6n the database
        $.post("add_item.php", {name: itemName, image: itemImage}, function(data){
            // Handle response from server
            if(data.success){
                // Item added successfully, update the UI
                $("#closet").append("<div class='item'><img src='" + itemImage + "' alt='" + itemName + "'><p>" + itemName + "</p></div>");
            } else {
                // Display error message 
                alert("Error: " + data.message);
            }
        });
    });
    
    // Code to fetch and display items from the database
    function fetchItems(){
        $.get("get_items.php", function(data){
            // Process retrieved data and display items in the closet
            if(data.success){
                $.each(data.items, function(index, item){
                    $("#closet").append("<div class='item'><img src='" + item.image + "' alt='" + item.name + "'><p>" + item.name + "</p></div>");
                });
            } else {
                // Display error message
                alert("Error: " + data.message);
            }
        });
    }

    // Call fetchItems function when the page loads
    fetchItems();
});