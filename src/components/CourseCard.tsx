
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface Course {
  title: string;
  code: string;
}

interface CourseTableProps {
  courses: Course[];
  onApplyClick: () => void;
}

const CourseTable = ({ courses, onApplyClick }: CourseTableProps) => {
  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Course Name</TableHead>
            <TableHead>Course Code</TableHead>
            <TableHead className="w-[100px]">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.map((course, index) => (
            <TableRow key={index}>
              <TableCell>{course.title}</TableCell>
              <TableCell>{course.code}</TableCell>
              <TableCell>
                <Button 
                  onClick={onApplyClick}
                  size="sm"
                  className="bg-healthcare-600 hover:bg-healthcare-700 transition-all"
                >
                  Apply Now
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CourseTable;
