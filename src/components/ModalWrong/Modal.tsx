import { CloseIcon } from '../Icons';

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
  hasActions?: boolean;
  onClose: () => void;
};

export const Modal = ({
  isOpen,
  children,
  hasActions = false,
  onClose
}: ModalProps) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-10 bg-black bg-opacity-25 text-gray-700">
          <div className="flex h-full w-full items-center justify-center">
            <div className="absolute z-50 mx-auto my-0 flex h-80 w-[480px] flex-col overflow-hidden rounded-xl bg-white shadow-2xl">
              <header className="bg-slate-200">
                <div className="flex items-center justify-between p-3">
                  <p className="text-lg font-bold">Modal</p>
                  <button onClick={onClose}>
                    <CloseIcon />
                  </button>
                </div>
              </header>

              <div className="flex flex-1 items-center justify-center p-3">
                {children}
              </div>

              {hasActions && (
                <footer className="flex w-full justify-end gap-2 p-3">
                  <button
                    onClick={onClose}
                    className="rounded-md bg-red-500 px-4 py-1 text-white"
                  >
                    Cancelar
                  </button>
                  <button className="rounded-md bg-green-500 px-4 py-1 text-white">
                    Salvar
                  </button>
                </footer>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
