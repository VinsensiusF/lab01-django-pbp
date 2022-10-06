from .models import BarangWishlist
from django import forms
from django import forms

class AjaxForm(forms.ModelForm):    
    class Meta:
        model = BarangWishlist
        fields = ['nama_barang', 'harga_barang', 'deskripsi']