function renderForm (mobile) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <script>
        function recordSaveTime() {
            const now = new Date();
            const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'};
            const formattedTimestamp = now.toLocaleDateString('th-TH', options);
            document.getElementById('timecreate').value = formattedTimestamp;
        }
    </script>
    <head>                         
        <meta charset="UTF-8">
        <title>Mobile Store Management</title>
    </head>
    <body>
        <form action="/mobile/save" method="post">
           <div class="container" style="border:1px solid black,width:1980px">
                <input type="hidden" id="id" name="id" value="${mobile.id}" />
                <input type="hidden" id="timecreate" name="timecreate" value="${mobile.timecreate}" />
                <div>
                    <label for="title">Product:</label>
                    <input type="text" id="product" name="product" value="${mobile.product}" />
                </div>
                <div>                      
                    <label for="title">Description: </label>
                    <input type="text" id="description" name="description" value="${mobile.description}" />
                </div>
                <div>
                    <label for="title">Price: </label>
                    <input type="text" id="price" name="price" value="${mobile.price}" />
                </div>
                <div>
                    <label for="title">Quantity: </label>
                    <input type="text" id="quantity" name="quantity" value="${mobile.quantity}" />
                </div>
                <div>
                    <button type="submit" onclick="recordSaveTime()">save</button>
                </div>
            </div>
        </form>
    </body>
    </html>
     `}; 
    
module.exports = renderForm;