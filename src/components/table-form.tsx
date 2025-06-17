// components/table-form.tsx
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface FileData {
  file_name: string;
  description: string;
  updated_at: string;
  created_at: string;
  status: string;
}

export function TableForm({ files }: { files: FileData[] }) {
  return (
    <Table>
      <TableCaption>A list of your recent files.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">File Name</TableHead>
          <TableHead className="w-[300px]">Description</TableHead>
          <TableHead>Last Updated</TableHead>
          <TableHead>Created</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {files.map((file) => (
          <TableRow key={file.file_name}>
            <TableCell className="font-medium">{file.file_name}</TableCell>
            <TableCell className="font-medium">{file.description}</TableCell>
            <TableCell>{file.updated_at}</TableCell>
            <TableCell>{file.created_at}</TableCell>
            <TableCell className="text-right">{file.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
