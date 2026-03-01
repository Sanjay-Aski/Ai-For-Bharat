'use client';

import { useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, FileText, X, CheckCircle2, AlertCircle } from 'lucide-react';

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  progress: number;
  status: 'uploading' | 'success' | 'error';
  error?: string;
}

interface DragDropUploadProps {
  onFilesSelected?: (files: File[]) => void;
}

export function DragDropUpload({ onFilesSelected }: DragDropUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      handleFiles(files);
    }
  };

  const handleFiles = (files: File[]) => {
    const newFiles: UploadedFile[] = files.map((file) => ({
      id: Math.random().toString(36),
      name: file.name,
      size: file.size,
      progress: 0,
      status: 'uploading',
    }));

    setUploadedFiles((prev) => [...prev, ...newFiles]);

    // Simulate upload
    newFiles.forEach((uploadFile) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
          setUploadedFiles((prev) =>
            prev.map((f) =>
              f.id === uploadFile.id ? { ...f, progress: 100, status: 'success' } : f
            )
          );
        } else {
          setUploadedFiles((prev) =>
            prev.map((f) =>
              f.id === uploadFile.id ? { ...f, progress } : f
            )
          );
        }
      }, 500);
    });

    onFilesSelected?.(files);
  };

  const removeFile = (id: string) => {
    setUploadedFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <Card
        className={`border-2 border-dashed p-12 text-center transition-all cursor-pointer ${
          isDragging
            ? 'border-primary bg-primary/5'
            : 'border-slate-300 hover:border-primary/50 bg-slate-50'
        }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="space-y-4">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg transition ${
            isDragging ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
          }`}>
            <Upload className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              {isDragging ? 'Drop your file here' : 'Drag and drop your document'}
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              or click to browse from your device
            </p>
            <p className="text-xs text-slate-500">
              Supported formats: PDF, JPG, PNG • Max size: 10MB
            </p>
          </div>
          <Button className="btn-primary">
            Select File
          </Button>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleFileInput}
          className="hidden"
          accept=".pdf,.jpg,.jpeg,.png"
        />
      </Card>

      {/* Uploaded Files List */}
      {uploadedFiles.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-medium text-slate-900">Uploaded Files</h3>
          {uploadedFiles.map((file) => (
            <Card key={file.id} className="p-4 border border-slate-200">
              <div className="flex items-start gap-4">
                <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <p className="font-medium text-slate-900 text-sm">{file.name}</p>
                      <p className="text-xs text-slate-500">{formatFileSize(file.size)}</p>
                    </div>
                    {file.status === 'success' ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    ) : file.status === 'error' ? (
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    ) : null}
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        file.status === 'success'
                          ? 'bg-green-600'
                          : file.status === 'error'
                          ? 'bg-red-600'
                          : 'bg-primary'
                      }`}
                      style={{ width: `${file.progress}%` }}
                    />
                  </div>

                  {/* Status Text */}
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-slate-500">
                      {file.status === 'success'
                        ? 'Upload complete'
                        : file.status === 'error'
                        ? file.error || 'Upload failed'
                        : `${Math.round(file.progress)}%`}
                    </span>
                    <button
                      onClick={() => removeFile(file.id)}
                      className="text-slate-400 hover:text-slate-600 transition"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
