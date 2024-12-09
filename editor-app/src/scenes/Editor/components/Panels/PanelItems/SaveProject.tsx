import React, { useEffect, useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { MdDeleteForever } from 'react-icons/md';
import useSlide from 'scenify_sdk/useSlide';

export default function SaveProject() {
  const { item, setItem } = useSlide();
  const [projects, setProjects] = useState<{ name: string; data: any }[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [currentName, setCurrentName] = useState('');

  useEffect(() => {
    const savedProject = localStorage.getItem('save-project');
    if (savedProject) {
      setProjects(JSON.parse(savedProject));
    } else {
      localStorage.setItem('save-project', JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('save-project', JSON.stringify(projects));
  }, [projects]);

  const handleCreateNewFile = () => {
    const newProject = {
      name: `Project - ${projects.length + 1}`,
      data: item,
    };
    setProjects([...projects, newProject]);
  };

  const handleDelete = (index: number) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setCurrentName(projects[index].name);
  };

  const handleSaveEdit = (index: number) => {
    const updatedProjects = projects.map((project, i) =>
      i === index ? { ...project, name: currentName } : project
    );
    setProjects(updatedProjects);
    setEditingIndex(null);
  };

  const handleLoad = (index: number) => {
    setItem(projects[index].data);
  };

  return (
    <>
      <div className="bg-gray-800 text-white text-center py-2 font-bold text-lg">SaveProject</div>
      <div className="w-full flex justify-center mt-4">
        <button
          className="bg-gray-700 hover:bg-gray-600 transition-colors text-white px-6 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          onClick={handleCreateNewFile}
        >
          Save in New File
        </button>
      </div>
      <hr className="my-6 border-t border-gray-300 w-full" />
  
      <div className="max-w-2xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white hover:bg-gray-100 transition-colors w-full flex justify-between items-center px-4 py-3 rounded-md shadow-sm border border-gray-300 my-2"
          >
            <div className="w-full flex items-center gap-2">
              {editingIndex === index ? (
                <input
                  type="text"
                  value={currentName}
                  onChange={(e) => setCurrentName(e.target.value)}
                  className="border px-2 py-1 rounded focus:outline-none w-full text-black"
                />
              ) : (
                <div
                  className="w-full cursor-pointer truncate text-gray-700 font-medium"
                  onClick={() => handleLoad(index)}
                >
                  {project.name}
                </div>
              )}
              
              {editingIndex === index && (
                <button
                  onClick={() => handleSaveEdit(index)}
                  className="text-green-600 hover:text-green-800 mr-2 font-black"
                >
                  ✓
                </button>
              )}
            </div>

            <div className="flex gap-4">
              {editingIndex !== index && (
                <CiEdit
                  size={24}
                  className="cursor-pointer text-gray-500 hover:text-gray-900 transition-colors"
                  onClick={() => handleEdit(index)}
                />
              )}
              <MdDeleteForever
                size={24}
                className="cursor-pointer text-gray-500 hover:text-red-500 transition-colors"
                onClick={() => handleDelete(index)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
