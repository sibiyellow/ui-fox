<p>1、ui-fox.windows<br>
This is a simple modal window Library<br>
Options
    </p><table width="100%" border="1">
<thead><tr>
<th>Options</th>
            <th>Default</th>
            <th>Allowed</th>
            <th>Description</th>
        </tr></thead>
<tr>
<td>width</td>
            <td>'auto' </td>
            <td>Please enter a number</td>
            <td>Change the width of modal box. (Please enter a number.)</td>
        </tr>
<tr>
<td>height</td>
            <td>'auto'</td>
            <td>Please enter a number</td>
            <td>Change the height of modal box. (Please enter a number.)</td>
        </tr>
<tr>
<td>top</td>
            <td>'auto' (50%)</td>
            <td>Please enter a number</td>
            <td>Change the top position of modal box. (Please enter a number.)</td>
        </tr>
<tr>
<td>left</td>
            <td>'auto' (50%)</td>
            <td>Please enter a number</td>
            <td>Change the left position of modal box. (Please enter a number.)</td>
        </tr>
<tr>
<td>title</td>
            <td>''</td>
            <td>Please enter a string</td>
            <td>Change the title of modal box. (Please enter a string.)</td>
        </tr>
<tr>
<td>url</td>
            <td>''</td>
            <td>Please enter a link address</td>
            <td>Load document by a link address in modal box.(Please enter a string.)</td>
        </tr>
<tr>
<td>color</td>
            <td>'#000000'</td>
            <td>Please enter a color string</td>
            <td>Change the mask layer's color of modal box.(Please enter a color string.)</td>
        </tr>
<tr>
<td>speed</td>
            <td>1000(ms)</td>
            <td>Please enter a number</td>
            <td>Change the mask layer appeared speed of modal box.</td>
        </tr>
<tr>
<td>opacity</td>
            <td>''</td>
            <td>Please enter a floating point number between 0-1.</td>
            <td>Change the mask layer's opacity of modal box.</td>
        </tr>
<tr>
<td>showClose</td>
            <td>true</td>
            <td>true|false</td>
            <td>Whether to show the close button of modal box.</td>
        </tr>
<tr>
<td>closeByEsc</td>
            <td>true</td>
            <td>true|false</td>
            <td>Allow the user to close the modal box by pressing 'ESC'</td>
        </tr>
<tr>
<td>closeByBody</td>
            <td>true</td>
            <td>true|false.</td>
            <td>Allow the user to close the modal box by clicking outside of modal box.</td>
        </tr>
</table>
Callback functions
    <table width="100%" border="1">
<thead><tr>
<th>Functions</th>
            <th>Description</th>
        </tr></thead>
<tr>
<td>onOpen</td>
            <td>This callback function will be fired just after modal box is successfully open.</td>
        </tr>
<tr>
<td>onClose</td>
            <td>This callback function will be fired just after modal box is successfully close.</td>
        </tr>
</table>
Methods
    Global Method:$.window.close()
    <table width="100%" border="1">
<thead><tr>
<th>Method</th>
            <th>Arguments</th>
            <th>Description</th>
        </tr></thead>
<tr>
<td>close</td>
            <td>true|false</td>
            <td>Close all currently opened modal box. Called by $.window.close()..</td>
        </tr>
</table><br>
2、ui-fox.Image<br>
   This is a simple Image scaling Library<br>
    <h3>
<a name="user-content-options" class="anchor" href="#options"><span class="octicon octicon-link"></span></a>Options</h3>
    <table width="100%" border="1">
<thead><tr>
<th>Options</th>
            <th>Default</th>
            <th>Allowed</th>
            <th>Description</th>
        </tr></thead>
<tr>
<td>id</td>
            <td>'' </td>
            <td>Please enter a string</td>
            <td>the selector of the images</td>
        </tr>
<tr>
<td>width</td>
            <td>'auto' </td>
            <td>Please enter a number</td>
            <td>Set the width of the image.. (Please enter a number.)</td>
        </tr>
<tr>
<td>height</td>
            <td>'auto'</td>
            <td>Please enter a number</td>
            <td>Set the height of the image. (Please enter a number.)</td>
        </tr>
<tr>
<td>loading</td>
            <td>'' (50%)</td>
            <td>Please enter a address of the loading image</td>
            <td>Set the the loading image</td>
        </tr>
</table>

