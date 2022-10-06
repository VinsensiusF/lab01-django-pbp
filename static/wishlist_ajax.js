const table = document.getElementById('table')

$(document).ready(() => {
  $.get('/wishlist/json', (wishlists) => {
    wishlists.forEach((wishlist) => {
      $('#table').append(`
        <tr >
          <th class="text-center">${wishlist.fields.nama_barang}</th>
          <th class="text-center">${wishlist.fields.harga_barang}</th>
          <th class="text-center">${wishlist.fields.deskripsi}</th>
        </tr>
      `)
    })
  })
  
  $('#form').submit((e) => {
    e.preventDefault()
    $.ajax({
      url: '/wishlist/ajax/submit',
      type: 'POST',
      dataType: 'json',
      data: $('#form').serialize(),
      success: (respond) => {
        console.log(respond)
        $('#table').append(`
          <tr class="item-table-row">
            <th class="item-table-cell text-center">${respond.nama_barang}</th>
            <th class="item-table-cell text-center">${respond.harga_barang}</th>
            <th class="item-table-cell text-center">${respond.deskripsi}</th>
          </tr>
        `)
        form.reset();
      },
      error: () => {
        alert("ERROR")
      }
    })
  })
})