from django.shortcuts import render

from rest_framework import generics, permissions
from .models import File, FileCategory, FileMetadata, UserActivityLog
from .serializers import FileSerializer, FileCategorySerializer, FileMetadataSerializer, UserActivityLogSerializer

class FileListCreateView(generics.ListCreateAPIView):
    queryset = File.objects.all()
    serializer_class = FileSerializer
    permission_classes = [permissions.IsAuthenticated]

class FileDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = File.objects.all()
    serializer_class = FileSerializer
    permission_classes = [permissions.IsAuthenticated]

class UserActivityLogView(generics.ListAPIView):
    queryset = UserActivityLog.objects.all()
    serializer_class = UserActivityLogSerializer
    permission_classes = [permissions.IsAuthenticated]

