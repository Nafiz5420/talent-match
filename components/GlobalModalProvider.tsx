"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import Modal from "./Modal"
import TalentRequestForm from "./TalentRequestForm"
import ContactForm from "./ContactForm"

type ModalType = "talent-request" | "contact" | null
type TalentType = "QA Testers" | "Virtual Assistants" | "Content Writers" | "General"

interface GlobalModalContextType {
  openTalentRequestModal: (talentType?: TalentType) => void
  openContactModal: () => void
  closeModal: () => void
  isOpen: boolean
  modalType: ModalType
}

const GlobalModalContext = createContext<GlobalModalContextType | undefined>(undefined)

export function useGlobalModal() {
  const context = useContext(GlobalModalContext)
  if (context === undefined) {
    throw new Error("useGlobalModal must be used within a GlobalModalProvider")
  }
  return context
}

interface GlobalModalProviderProps {
  children: ReactNode
}

export function GlobalModalProvider({ children }: GlobalModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [modalType, setModalType] = useState<ModalType>(null)
  const [selectedTalentType, setSelectedTalentType] = useState<TalentType>("General")

  const openTalentRequestModal = (talentType: TalentType = "General") => {
    setSelectedTalentType(talentType)
    setModalType("talent-request")
    setIsOpen(true)
  }

  const openContactModal = () => {
    setModalType("contact")
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setModalType(null)
  }

  const getModalTitle = () => {
    switch (modalType) {
      case "talent-request":
        return "Request Talent"
      case "contact":
        return "Contact Us"
      default:
        return ""
    }
  }

  const renderModalContent = () => {
    switch (modalType) {
      case "talent-request":
        return <TalentRequestForm talentType={selectedTalentType} onClose={closeModal} />
      case "contact":
        return <ContactForm onClose={closeModal} />
      default:
        return null
    }
  }

  return (
    <GlobalModalContext.Provider
      value={{
        openTalentRequestModal,
        openContactModal,
        closeModal,
        isOpen,
        modalType,
      }}
    >
      {children}

      {/* Global Modal */}
      <Modal isOpen={isOpen} onClose={closeModal} title={getModalTitle()}>
        {renderModalContent()}
      </Modal>
    </GlobalModalContext.Provider>
  )
}
