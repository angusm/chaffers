from django.contrib import admin
from resources.models import Specialty


# Setup Admin models
class SpecialtyAdmin(admin.ModelAdmin):

    fields = ('name',
              'description',
              'ability_modifiers',
              'attribute_modifiers',)
    admin.ModelAdmin.filter_horizontal = ('ability_modifiers',
                                          'attribute_modifiers',)

    list_display = ('name', 'description',)
    search_fields = ('name',)

admin.site.register(Specialty, SpecialtyAdmin)