from rest_framework import serializers
from .models import User, File, FileCategory, FileMetadata, UserActivityLog

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'storage_used', 'is_premium')

class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = '__all__'

class FileCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = FileCategory
        fields = '__all__'

class FileMetadataSerializer(serializers.ModelSerializer):
    class Meta:
        model = FileMetadata
        fields = '__all__'

class UserActivityLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserActivityLog
        fields = '__all__'
