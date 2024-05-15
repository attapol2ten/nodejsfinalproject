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
    <body style="@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&display=swap'); font-family: 'IBM Plex Sans Thai', sans-serif; background-color: rgb(180, 60, 9); border-color: rgb(217, 90, 6); box-shadow: rgba(255, 255, 255, 0.15) 0px 4px 4px -2px inset;">
        
        <form action="/mobile/save" method="post">
        
           <div class="container" style="
           display: flex;
           justify-content: center;
           align-items: center;
           flex-direction: column;
           height: 900px;">
                <div class="form-group" style="
                border-radius: 15px;
                padding: 5rem;
                background-color: rgb(255, 255, 255);">
                    <h2>Mobile Store Management Form</h2>
                    <input type="hidden" id="id" name="id" value="${mobile.id}" />
                    <input type="hidden" id="timecreate" style=" padding: 11px;padding-right: 90px; background-color: #d8d8d8; margin-bottom: 1rem; border-radius: 5px; border: 1px solid; "name="timecreate" value="${mobile.timecreate}" />
                    <div>
                        <label for="title">Product:</label>
                        <input type="text" id="product" style=" padding: 11px;padding-right: 90px; background-color: #d8d8d8; margin-bottom: 1rem; border-radius: 5px; border: 1px solid; "name="product" value="${mobile.product}" required />
                    </div>
                    <div>                      
                        <label for="title">Description: </label>
                        <input type="text" id="description" style=" padding: 11px;padding-right: 90px;background-color: #d8d8d8; margin-bottom: 1rem; border-radius: 5px; border: 1px solid; " name="description" value="${mobile.description}" required />
                    </div>
                    <div>
                        <label for="title">Price: </label>
                        <input type="text" id="price" style=" padding: 11px;padding-right: 90px; background-color: #d8d8d8; margin-bottom: 1rem; border-radius: 5px; border: 1px solid; " name="price" value="${mobile.price}"required  />
                    </div>
                    <div>
                        <label for="title">Quantity: </label>
                        <input type="number" id="quantity" style=" padding: 11px;padding-right: 90px; background-color: #d8d8d8; margin-bottom: 1rem; border-radius: 5px; border: 1px solid; " name="quantity" value="${mobile.quantity}" required />
                    </div>
                    <div style="display: flex; justify-content: center;">
                        <button type="submit" onclick="recordSaveTime()" style="display: flex; justify-content: center; align-items: center; width: 200px; height: 50px; border-radius: 15px; margin-bottom: 0.7rem; background-color: rgb(253, 210, 138); color: rgb(217, 139, 6); text-decoration:none; font-weight: bold;">Save</button>
                    </div>
            </div>
        </form>
    </body>
    </html>
`}; 

module.exports = renderForm;